describe('ViewStudentsController test =>', function() {

    var ViewStudentsControllerObj, $controller, scope, StudentInfoServiceObj;


    beforeEach(function() {
        module('naut');

        inject(function( $controller, $rootScope, _StudentInfoService_ ){
            scope = $rootScope.$new();
            StudentInfoServiceObj = _StudentInfoService_;
            ViewStudentsControllerObj = $controller("ViewStudentsController", { 
                $scope : scope,
                StudentInfoService : StudentInfoServiceObj,
             });

        });
    });

    it("gets the students information", function(){
        expect(ViewStudentsControllerObj).toBeDefined();
    });
});