"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var restutils_service_1 = require("./restutils.service");
describe('RestutilsService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(restutils_service_1.RestutilsService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
