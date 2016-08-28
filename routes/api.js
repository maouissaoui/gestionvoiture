"use strict";


var _ = require('lodash'),
	VOITURES = require('./data/voitures').voitures;
/**
 * variable to act as a generated id
 * @type {number}
 */
var ID = 9;

/**
 * Fetch all voitures
 * If category query is provided, fetch voitures filtered by modele
 */
exports.fetchVoitures = function (req, res) {
    var voitures = [];
    if(req.query.modele){
        voitures = VOITURES.filter(function(voiture){
            return voiture.modele === req.query.modele;
        });
    } else {
        voitures = VOITURES;
    }
    return res.status(200).json(voitures);

};


/**
 * Fetch a voiture by id
 */
exports.fetchVoiture = function (req, res){
    var id = req.params.id,

	voiture = _.find(VOITURES, function (voiture) {
		return voiture.id == id;
	});

	if (voiture) {
		return res.status(200).json(voiture);
	} else {
		return res.status(404).end();
	}
};


/**
 * Create a voiture
 */
exports.addVoiture = function (req, res) {
    var voitureToAdd = req.body;

	var existingVoiture = _.find(VOITURES, function (voiture) {
		return voitureToAdd.marque == voitures.marque;
	});

	if (existingVoiture) {
		return res.status(500).json({ error: 'La voiture ' + existingVoiture.marque + ' a déjà été ajouté.' });
	} else {
		ID ++;
		voitureToAdd.id = ID;
		VOITURES.push(voitureToAdd);
		return res.status(201).json(voitureToAdd);
	}
};


/**
 * Update a VOITURE
 */
exports.updateVoiture = function(req, res) {
    var voituretoUpdate = req.body;

	_.forEach(VOITURES, function (voiture, index) {
		if (voiture.id == voituretoUpdate.id) {
			VOITURES[index] = voituretoUpdate;
			return res.status(200).end();
		}
	});

	return res.status(304).end();
};


/**
 * Delete a voiture
 */
exports.deleteVoiture = function (req, res) {
    var id = req.params.id,

	removedVoitures = _.remove(VOITURES, function (voiture) {
		return voiture.id == id;
	});

	if (_.isEmpty(removedVoitures)) {
		return res.status(304).end();
	} else {
		return res.status(200).end();
	}

};
