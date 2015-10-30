import com.theconnman.angular.services.DataGeneratorService

class BootStrap {

	DataGeneratorService dataGeneratorService

	def init = { servletContext ->
		dataGeneratorService.bootstrapData()
	}
}
