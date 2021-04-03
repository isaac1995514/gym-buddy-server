import firebase from "firebase";
import firebaseDb from "../firebaseDb";

/**
 * Get a list of all existing schedules of a user
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const allSchedule_Get = async (req, res, next) => {};

/**
 * Get a schedule based on a id
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const schedule_Get = async (req, res, next) => {};

/**
 * Create new schedule
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const createNewSchedule_Post = async (req, res, next) => {};

/**
 * Remove an existing schedule
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const deleteSchedule_Post = async (req, res, next) => {};

/**
 * Update an existing schedule
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const updateSchedule_Post = async (req, res, next) => {};
