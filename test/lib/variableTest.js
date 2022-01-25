const assert = require("assert");
const variable = require("../../lib/variable.js");

suite("variable.js", function() {
    test("setValue should accept a value", function() {
        const variable_1 = new variable();
        variable_1.setValue(null);
    });

    test("getValue should return the previous set value", function() {
        const variable_1 = new variable();
        variable_1.setValue("foo");
        assert.equal(variable_1.getValue(), "foo");
    });

    test("getDatabaseColumnName should return the value which is passed by the constructor", function() {
        const variable_1 = new variable("bar");
        assert.equal(variable_1.getDatabaseColumnName(), "bar");
    });
});
