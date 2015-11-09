package com.theconnman.angular.controllers

import com.theconnman.angular.domains.List
import grails.converters.JSON
import grails.rest.RestfulController

class ListController extends RestfulController {

	ListController() {
		super(List)
	}

	def index() {
		render(List.list() as JSON)
	}
}
