require(['pithy', 'jquery', 'lodash'], function (html, $, _) {

    function getLabelIssues(org, label, callback) {
        $.ajax({
            url: 'https://api.github.com/search/issues',
            data: (
                'q=user:' + encodeURIComponent(org) +
                '+label:' + label +
                '+state:open'
            ),
            error: callback,
            success: function (data) {
                callback(null, data.items);
            }
        });
    }

    function renderIssue(issue) {
        console.log('renderIssue ' + issue.id);
        return html.li('.issue', issue.title);
    }

    function renderIssues(label, issues) {
        return html.ul({}, _.map(issues, renderIssue));
    }

    function renderLabel(label, issues) {
        return html.div('.label', [
            html.h2({}, label),
            renderIssues(label, issues)
        ]);
    }

    $('#labelForm').submit(function (ev) {
        ev.preventDefault();
        var org = $('input[name=org]').val();
        var label = $('input[name=label]').val();
        if (org && label) {
            getLabelIssues(org, label, function (err, issues) {
                $('#results').html(
                    renderLabel(label, issues).toString()
                );
            });
        }
    });

});
