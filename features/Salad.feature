Feature: Restful Endpoints
	As a Rest Api Developer
	I want to easily write my cucumber.js tests
	So that I will be faster to market

Scenario: Found not found endpoints
	Given A running salad server
  When I request "/"
  Then I should get back a 200
  When I request "/404" 
  Then I should get back a 404

Scenario: Italian Salad
  Given A running salad server
  When I request "/salad/italian"
  Then I should get back a 200
  And An Italian Salad should have 4 tomatoes