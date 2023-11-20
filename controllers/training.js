// @desc   Get all trainings
// @route  GET /api/trainings
// @access Public
exports.getTrainings = (req, res, next) => {
    res.status(200).json({ success: true, msg: "Összes képzés" });
}; 
// @desc   Get single training
// @route  GET /api/trainings/:id
// @access Public
exports.getTraining = (req, res, next) => {
    res.status(200).json({ success: true, msg: `A ${req.params.id} id-val rendelkező képzés` });
}; 
// @desc   Create new training
// @route  POST /api/trainings
// @access Private
exports.createTraining = (req, res, next) => {
    res.status(200).json({ success: true, msg: "Új képzés létrehozása" });
}; 
// @desc   Update training
// @route  PUT /api/trainings/:id
// @access Private
exports.updateTraining = (req, res, next) => {
  res.status(200).json({ success: true, msg: `A ${req.params.id} id-vel rendelkező képzés frissítése` });
}; 
// @desc   Delete training
// @route  DELETE /api/trainings/:id
// @access Private
exports.deleteTraining = (req, res, next) => {
  res.status(200).json({ success: true, msg: `A ${req.params.id} id-vel rendelkező képzés törlése` });
};
