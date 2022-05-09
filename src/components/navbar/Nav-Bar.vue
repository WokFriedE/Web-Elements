<template>
    <nav>
        <!-- reprogram buttons to be anchors -->
        <button class="template-button" onclick="window.location='https://github.com/WokFriedE/Personal-Website';">
            Github Repo
        </button>
        <button class="template-button">
            <a>Resume</a>
        </button>
    </nav>
</template>

<script>
export default {

};
</script>

<style>
nav {
    background-color: var(--nav-background);
    display: flex;
    justify-content: right;
    align-items: right;
}

.template-button {
    background-color: rgb(175, 175, 175);
    color: rgb(68, 68, 68);
    border-radius: 10px;
    margin: 1rem;
    margin-bottom: 0.05%;
    padding: 0.5%;
    padding-inline: 1%;
}

.template-button:hover {
    background-color: rgb(83, 83, 83);
    color: #ffffff;
    animation: raiseUp 100ms ease-in;
    transform: scale(1.1);
}

.template-button:not(:hover) {
    animation: goDown 100ms ease-in;
    transform: scale(1);
}

.template-button a {
    width: 100%;
    height: 100%;
    text-decoration: none;
}
</style>