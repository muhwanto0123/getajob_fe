import { list } from "postcss";
export default function handler(req, res) {
    res.status(200).json({
        title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor."
    })
}