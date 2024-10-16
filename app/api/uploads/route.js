import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';


cloudinary.config({
  cloud_name: "dlmmpt2nc",
  api_key: "753652456799432",
  api_secret: "yINIBOmgYhS7ymljhUlscUV5bwg",
});







async function readDataFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log("Data read from file:", data);
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading data file:', error);
    return [];
  }
}

async function writeDataFile(filePath, data) {
  try {
    console.log("Writing data to file:", JSON.stringify(data, null, 2));
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing to data file:', error);
  }
}
  





export async function POST(req) {

 

  try {
    console.log("working");
    const { data } = await req.json();

    // Step 1: Upload the PDF as a raw file
    const uploadedResponse = await cloudinary.uploader.upload(data, {
      resource_type: "raw",  // Preserve the PDF as a raw file
      timeout: 240000,  // Increased timeout to 4 minutes
    });

    const pdfUrl = uploadedResponse.secure_url;
    console.log("PDF uploaded with URL:", pdfUrl);

    // Step 2: Generate the thumbnail using the PDF's URL
    const thumbnailResponse = await cloudinary.uploader.upload(pdfUrl, {
      resource_type: "image",
      transformation: [
        { width: 300, height: 400, crop: "thumb", format: "jpg", page: 1 }  // Generate thumbnail from the first page
      ],
      timeout: 240000,  // Increased timeout to 4 minutes
    });
    const thumbnailUrl = thumbnailResponse.secure_url.replace('.pdf', '.jpg');
    
    console.log("Thumbnail generated with URL:", thumbnailUrl);



    const referer = req.headers.get('referer') || '';
    let dataFilePath = path.join(process.cwd(), 'data.json');  // Default to data.json

    if (referer.includes('upload-p')) {
      dataFilePath = path.join(process.cwd(), 'datap.json');
    } else if (referer.includes('upload-b')) {
      dataFilePath = path.join(process.cwd(), 'data.json');
    }

      // Step 3: Read existing data from data.json
      const existingData = await readDataFile(dataFilePath);

      // Step 4: Add the new URL object to the array
      existingData.push({ url: pdfUrl, thumburl: thumbnailUrl || null });
  
      // Step 5: Write the updated data back to data.json
      await writeDataFile(dataFilePath, existingData);



    return NextResponse.json({ 
      url: pdfUrl,  // Original PDF URL
      thumburl: thumbnailUrl || null,  // Thumbnail URL, or null if not generated
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Something went wrong!' }, { status: 500 });
  }
}
