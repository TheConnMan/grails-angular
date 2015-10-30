package com.theconnman.angular.services

import com.theconnman.angular.domains.Item
import com.theconnman.angular.domains.List
import grails.transaction.Transactional

@Transactional
class DataGeneratorService {

	void bootstrapData() {
		(0..9).each { int listNum ->
			List list = new List(name: 'List ' + listNum).save()
			(0..9).each { int itemNum ->
				new Item(name: 'Item ' + itemNum, list: list).save()
			}
		}
	}
}
