package com.theconnman.angular.domains

import grails.rest.RestfulController

class ListController extends RestfulController {
	static responseFormats = ['json', 'xml']

	ListController() {
		super(List)
	}
}
