package com.theconnman.angular.domains

import grails.rest.RestfulController

class ItemController extends RestfulController {
	static responseFormats = ['json', 'xml']

	ItemController() {
		super(List)
	}
}
