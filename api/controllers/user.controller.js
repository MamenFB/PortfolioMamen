
export const test = (req, res) => {
  console.log(req.body); 

  res.json({message: 'API is working!'});
}
