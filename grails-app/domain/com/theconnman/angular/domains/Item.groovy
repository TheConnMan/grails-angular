package com.theconnman.angular.domains

class Item {

	String name

	static belongsTo = [list: List]

	static constraints = {
		name()
	}

	String toString() {
		name
	}
}
