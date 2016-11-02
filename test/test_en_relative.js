
test("Test - Single Expression", function() {

    var text = "next week";
    var result = chrono.parse(text, new Date(2016, 10-1, 1))[0];
    ok(result.text == text, result.text);
    ok(result.start.get('year') == 2016, JSON.stringify(result.start));
    ok(result.start.get('month') == 10, JSON.stringify(result.start));
    ok(result.start.get('day') == 8, JSON.stringify(result.start));
    ok(result.start.get('hour') == 12, JSON.stringify(result.start));

    var text = "next 2 weeks";
    var result = chrono.parse(text, new Date(2016, 10-1, 1))[0];
    ok(result.text == text, result.text);
    ok(result.start.get('year') == 2016, JSON.stringify(result.start));
    ok(result.start.get('month') == 10, JSON.stringify(result.start));
    ok(result.start.get('day') == 15, JSON.stringify(result.start));
    ok(result.start.get('hour') == 12, JSON.stringify(result.start));

    var text = "last week";
    var result = chrono.parse(text, new Date(2016, 10-1, 1))[0];
    ok(result.text == text, result.text);
    ok(result.start.get('year') == 2016, JSON.stringify(result.start));
    ok(result.start.get('month') == 9, JSON.stringify(result.start));
    ok(result.start.get('day') == 24, JSON.stringify(result.start));
    ok(result.start.get('hour') == 12, JSON.stringify(result.start));

    var text = "last 2 weeks";
    var result = chrono.parse(text, new Date(2016, 10-1, 1))[0];
    ok(result.text == text, result.text);
    ok(result.start.get('year') == 2016, JSON.stringify(result.start));
    ok(result.start.get('month') == 9, JSON.stringify(result.start));
    ok(result.start.get('day') == 17, JSON.stringify(result.start));
    ok(result.start.get('hour') == 12, JSON.stringify(result.start));

    var text = "next day";
    var result = chrono.parse(text, new Date(2016, 10-1, 1))[0];
    ok(result.text == text, result.text);
    ok(result.start.get('year') == 2016, JSON.stringify(result.start));
    ok(result.start.get('month') == 10, JSON.stringify(result.start));
    ok(result.start.get('day') == 2, JSON.stringify(result.start));
    ok(result.start.get('hour') == 12, JSON.stringify(result.start));

    var text = "next 2 days";
    var result = chrono.parse(text, new Date(2016, 10-1, 1))[0];
    ok(result.text == text, result.text);
    ok(result.start.get('year') == 2016, JSON.stringify(result.start));
    ok(result.start.get('month') == 10, JSON.stringify(result.start));
    ok(result.start.get('day') == 3, JSON.stringify(result.start));
    ok(result.start.get('hour') == 12, JSON.stringify(result.start));

    var text = "last day";
    var result = chrono.parse(text, new Date(2016, 10-1, 1))[0];
    ok(result.text == text, result.text);
    ok(result.start.get('year') == 2016, JSON.stringify(result.start));
    ok(result.start.get('month') == 9, JSON.stringify(result.start));
    ok(result.start.get('day') == 30, JSON.stringify(result.start));
    ok(result.start.get('hour') == 12, JSON.stringify(result.start));

    var text = "last 2 days";
    var result = chrono.parse(text, new Date(2016, 10-1, 1))[0];
    ok(result.text == text, result.text);
    ok(result.start.get('year') == 2016, JSON.stringify(result.start));
    ok(result.start.get('month') == 9, JSON.stringify(result.start));
    ok(result.start.get('day') == 29, JSON.stringify(result.start));
    ok(result.start.get('hour') == 12, JSON.stringify(result.start));

    var text = "next month";
    var result = chrono.parse(text, new Date(2016, 10-1, 1))[0];
    ok(result.text == text, result.text);
    ok(result.start.get('year') == 2016, JSON.stringify(result.start));
    ok(result.start.get('month') == 11, JSON.stringify(result.start));
    ok(result.start.get('day') == 1, JSON.stringify(result.start));
    ok(result.start.get('hour') == 12, JSON.stringify(result.start));

    var text = "next 2 months";
    var result = chrono.parse(text, new Date(2016, 10-1, 1))[0];
    ok(result.text == text, result.text);
    ok(result.start.get('year') == 2016, JSON.stringify(result.start));
    ok(result.start.get('month') == 12, JSON.stringify(result.start));
    ok(result.start.get('day') == 1, JSON.stringify(result.start));
    ok(result.start.get('hour') == 12, JSON.stringify(result.start));

    var text = "last month";
    var result = chrono.parse(text, new Date(2016, 10-1, 1))[0];
    ok(result.text == text, result.text);
    ok(result.start.get('year') == 2016, JSON.stringify(result.start));
    ok(result.start.get('month') == 9, JSON.stringify(result.start));
    ok(result.start.get('day') == 1, JSON.stringify(result.start));
    ok(result.start.get('hour') == 12, JSON.stringify(result.start));

    var text = "last 2 months";
    var result = chrono.parse(text, new Date(2016, 10-1, 1))[0];
    ok(result.text == text, result.text);
    ok(result.start.get('year') == 2016, JSON.stringify(result.start));
    ok(result.start.get('month') == 8, JSON.stringify(result.start));
    ok(result.start.get('day') == 1, JSON.stringify(result.start));
    ok(result.start.get('hour') == 12, JSON.stringify(result.start));

    var text = "next few weeks";
    var result = chrono.parse(text, new Date(2016, 10-1, 1))[0];
    ok(result.text == text, result.text);
    ok(result.start.get('year') == 2016, JSON.stringify(result.start));
    ok(result.start.get('month') == 10, JSON.stringify(result.start));
    ok(result.start.get('day') == 22, JSON.stringify(result.start));
    ok(result.start.get('hour') == 12, JSON.stringify(result.start));

    var text = "next four weeks";
    var result = chrono.parse(text, new Date(2016, 10-1, 1))[0];
    ok(result.text == text, result.text);
    ok(result.start.get('year') == 2016, JSON.stringify(result.start));
    ok(result.start.get('month') == 10, JSON.stringify(result.start));
    ok(result.start.get('day') == 29, JSON.stringify(result.start));
    ok(result.start.get('hour') == 12, JSON.stringify(result.start));

    var text = "past week";
    var result = chrono.parse(text, new Date(2016, 10-1, 1))[0];
    ok(result.text == text, result.text);
    ok(result.start.get('year') == 2016, JSON.stringify(result.start));
    ok(result.start.get('month') == 9, JSON.stringify(result.start));
    ok(result.start.get('day') == 24, JSON.stringify(result.start));
    ok(result.start.get('hour') == 12, JSON.stringify(result.start));

});

test("Test - Single Expression (Strict)", function() {

    var text = "next year";
    var results = chrono.strict.parse(text, new Date(2012,7,10,12,14));
    ok(results.length == 0, JSON.stringify( results ) );

    var text = "past year";
    var results = chrono.strict.parse(text, new Date(2012,7,10,12,14));
    ok(results.length == 0, JSON.stringify( results ) );

    var text = "next few months";
    var results = chrono.strict.parse(text, new Date(2012, 8-1, 3));
    ok(results.length == 0, JSON.stringify( results ) );

    var text = "past few days";
    var results = chrono.strict.parse(text, new Date(2012, 8-1, 3));
    ok(results.length == 0, JSON.stringify( results ) );
});
