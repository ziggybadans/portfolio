import jsonData from "../../data/images.json"

export default (req, res) => {
    res.status(200).json(jsonData);
};