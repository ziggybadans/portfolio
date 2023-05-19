import jsonData from "../../data/podcast.json"

export default (req, res) => {
    res.status(200).json(jsonData);
};