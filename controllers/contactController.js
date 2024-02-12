// @desc to used to get all the contacts
// @route path api/v1/contact
// @access public
const getAllContact = (request, response) => {
  response.status(200).json({ message: "Fetched all the contact" });
};

// @desc to used to create contact
// @route path api/v1/contact
// @access public
const createContact = (request, response) => {
  response.status(201).json({ message: "Created requested contact" });
};

// @desc to used to get contact
// @route path api/v1/contact/:id
// @access public
const getContact = (request, response) => {
  response
    .status(200)
    .json({ message: `Fetched requested contact: ${request.params.id}` });
};

// @desc to used to update contact
// @route path api/v1/contact/:id
// @access public
const updateContact = (request, response) => {
  response
    .status(201)
    .json({ message: `Updated requested contact: ${request.params.id}` });
};

// @desc to used to delete contact
// @route path api/v1/contact/:id
// @access public
const deleteContact = (request, response) => {
  response
    .status(201)
    .json({ message: `Deleted requested contact: ${request.params.id}` });
};

module.exports = {
  getAllContact,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
