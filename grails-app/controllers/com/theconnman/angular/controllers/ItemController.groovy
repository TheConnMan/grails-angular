package com.theconnman.angular.controllers

import com.theconnman.angular.domains.Item
import com.theconnman.angular.domains.List
import grails.converters.JSON
import grails.rest.RestfulController

class ItemController extends RestfulController {

	ItemController() {
		super(Item)
	}

	def index(Long listId) {
		List list = List.get(listId)
		render(Item.findAllByList(list) as JSON)
	}
}
