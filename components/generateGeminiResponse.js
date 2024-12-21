import { GoogleGenerativeAI } from "@google/generative-ai"; // Ensure the import matches the documentation

const generateGeminiResponse = async (prompt) => {
  try {
    const genAI = new GoogleGenerativeAI(
      "AIzaSyBjf-MYVwcuiSQ8bN7eKt67fTNOGdN6j0I"
    ); // Adjust this if needed
    const model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // Adjust method usage if needed
    const result = await model.generateContent(prompt);
    const response = await result.response.text();
    return response;
  } catch (error) {
    console.error("Error generating content:", error);
    return null;
  }
};

export default generateGeminiResponse;
