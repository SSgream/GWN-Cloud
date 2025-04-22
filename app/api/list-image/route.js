import { S3 } from "aws-sdk";

export async function GET() {
    const s3 = new S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION,
    });

    const bucketName = process.env.AWS_BUCKET_NAME;

    try {
        const data = await s3.listObjectsV2({ Bucket: bucketName }).promise();

        const imageUrls = data.Contents.map(item => {
            const pathParts = item.Key.split("/"); // Pisahkan path berdasarkan "/"
            return {
                url: `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${item.Key}`,
                folder: pathParts[0],  // Folder utama (misalnya: "profile")
                subFolder: pathParts.length > 1 ? pathParts[1] : "", // Sub-folder (misalnya: "data_guru")
                name: pathParts.pop(), // Nama file gambar
            };
        });

        return new Response(JSON.stringify(imageUrls), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        console.error("Error fetching images from S3:", error);
        return new Response(JSON.stringify({ error: "Failed to fetch images" }), {
            status: 500,
        });
    }
}
