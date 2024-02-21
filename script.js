function darkMode(e) {
    let darkHeader = document.querySelector('.header');
    darkHeader.classList.toggle('dark-mode');

    let darkIcons = document.querySelectorAll('.header-icon');
    darkIcons.forEach(darkIcons => {
        darkIcons.classList.toggle('dark-mode');
    });

    let darkSearchBar = document.querySelector('.search-bar');
    darkSearchBar.classList.toggle('dark-mode');

    let darkAvatar = document.querySelector('.avatar');
    darkAvatar.classList.toggle('dark-mode');

    let darkIcon = document.querySelector('.dark-icon');
    darkIcon.classList.toggle('dark-mode');

    let darkButton = document.querySelectorAll('.header-button');
    darkButton.forEach(darkButton => {
        darkButton.classList.toggle('dark-mode');
    });

    let profilePics = document.querySelectorAll('.profile-pic');
    profilePics.forEach(pic => pic.classList.toggle('#profile-pic-dark'));
    profilePics.forEach(pic => pic.classList.toggle('#profile-pic-light'));
 }

