function changeTheme(theme) {

    // Change body class using setAttribute()
    document.body.setAttribute("class", theme + "-theme");

    // Save selected theme in custom attribute
    document.body.setAttribute("data-theme", theme);

    // Display current theme
    document.getElementById("result").textContent =
        "Current Theme: " + theme;
}