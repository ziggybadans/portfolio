// pages/api/articles.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      // Handle post request
      const newArticle = req.body; // your request's body contains the new article's data
      // Insert newArticle into database...
    } else if (req.method === 'GET') {
      // Handle get request
      // Fetch articles from database and return them...
      res.status(200).json({ /* articles data */ });
    } else {
      // Handle any other HTTP method
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  