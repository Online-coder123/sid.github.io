$(document).ready(function () {

    const MAX_SECTIONS = 20;
    for (let i = 1; i < MAX_SECTIONS; i++) {
        const section = $(".section" + i);
        const subsection = $(".subsection" + i);
        const sublink = $(".section" + i + " > a");

        if (section.hasClass("activesection")) {
            subsection.attr("aria-expanded", "true").show();
        } else {
            subsection.attr("aria-expanded", "false").hide();
        }

        section.click(function (e) {
            e.preventDefault();
            subsection.toggle();
            if (subsection.is(":visible")) {
                subsection.attr("aria-expanded", "true");
                sublink.attr("aria-expanded", "true");
            } else {
                subsection.attr("aria-expanded", "false");
                sublink.attr("aria-expanded", "false");
            }
        });
    }

});
