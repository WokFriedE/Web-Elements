<template>
    <footer>

        <div class="footer">
            <!-- General fade in -->
            <b-container class="footer-boot">
                <b-row>
                    <!-- icons -->
                    <b-col name="icon-exits">
                        <div class="icons">
                            <a href="https://github.com/WokFriedE" target="_blank">
                                <img src="../assets/socials/github.png" class="icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/ethan-ho-46a032233/" target="_blank">
                                <img src="../assets/socials/linkedin.png" class="icon" />
                            </a>
                            <a href="#" target="_blank">
                                <img src="../assets/socials/discord.png" class="icon" />
                            </a>
                        </div>
                    </b-col>
                </b-row>
                <!-- Contact Me section -->
                <b-row>
                    <b-col class="contact-me">
                        <h5 style="justify-content: center; text-align: center; margin: 0%; font-weight: bold;">Contact
                            Me</h5>
                        <div class="content1">
                            <ul class="contact-info">
                                <li>
                                    <a>Email: </a>
                                    <a href="mailto:ekh3@njit.edu">ekh3@njit.edu</a>
                                </li>
                                <li>
                                    <a>Discord: </a>
                                    <a style=" color: var(--footer-text-color);">snipe#4444</a>
                                </li>
                            </ul>
                        </div>
                    </b-col>
                </b-row>
                <!-- Copyright section -->
            </b-container>
            <h6 style="font-size: x-small; ">© Ethan Ho 2022</h6>
        </div>
    </footer>
</template>

<script>

export default {
    data() {
        return {
        };
    },
};
</script>

<style>
footer {
    color: var(--footer-text-color);
    background-color: dimgrey;
    text-align: center;
    justify-content: center;
    bottom: 0%;
    padding-bottom: 0.01%;
}

.icons {
    padding-top: 5px;
    padding-bottom: 5px;
    justify-content: center;
    text-align: center;
}

.icon {
    display: inline;
    margin-inline: 0.5%;
    padding: 0.5%;
    transform: scale(0.95);
}

.icon:hover,
.icon:focus {
    border-radius: 20px;
    background-color: rgba(153, 153, 153, 0.205);
    animation: raiseIn 200ms ease-in-out;
    animation-fill-mode: forwards;
}

.icon:not(:hover) {
    animation: raiseOut 200ms ease-in-out;
    animation-fill-mode: forwards;
}

.contact-me {
    justify-content: center;
    text-align: center;
    margin-inline: 1%;
}

.contact-info {
    list-style: none;
    padding: 0%;
    margin: 0%;
    margin-bottom: 4px;
    margin-top: 2px;
    font-size: 85%;
}

.contact-me a:link,
.contact-me a:visited {
    color: var(--footer-text-color);
    text-decoration: none;
}

.contact-me a:hover {
    color: #fcfcfc;
}
</style>