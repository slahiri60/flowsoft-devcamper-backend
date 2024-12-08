import express from 'express';
import { Bootcamp } from '../models/Bootcamp.js';

const router = express.Router();

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
router.get('/', async (request, response) => {
  try {
    const bootcamps = await Bootcamp.find();

    response.status(200).json({
      success: true,
      count: bootcamps.length,
      data: bootcamps,
    });
  } catch (error) {
    response.status(400).json({
      success: false,
    });
  }
});

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
router.get('/:id', async (request, response) => {
  try {
    const bootcamp = await Bootcamp.findById(request.params.id);

    if (!bootcamp) {
      return response.status(400).json({
        success: false,
      });
    }

    response.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    response.status(400).json({
      success: false,
    });
  }
});

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
router.post('/', async (request, response) => {
  try {
    const bootcamp = await Bootcamp.create(request.body);

    response.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    response.status(400).json({
      success: false,
    });
  }
});

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
router.put('/:id', async (request, response) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(request.params.id, request.body, {
      new: true,
      runValidators: true,
    });

    if (!bootcamp) {
      return response.status(400).json({
        success: false,
      });
    }

    response.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    response.status(400).json({
      success: false,
    });
  }
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