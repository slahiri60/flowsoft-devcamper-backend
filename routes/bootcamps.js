import express from 'express';
import { Bootcamp } from '../models/Bootcamp.js';

const router = express.Router();

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
router.get('/', async (request, response) => {
  response.status(200).json({ success: true, msg: 'Show all bootcamps' });
});

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
router.get('/:id', async (request, response) => {
  response
    .status(200)
    .json({ success: true, msg: `Show bootcamp ${request.params.id}` });
});

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
router.post('/', async (request, response) => {
  response.status(200).json({ success: true, msg: 'Create new bootcamp' });
});

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
router.put('/:id', async (request, response) => {
  response
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${request.params.id}` });
});

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
router.delete('/:id', async (request, response) => {
  response
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${request.params.id}` });
});
  

export default router;