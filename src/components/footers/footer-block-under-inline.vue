<template>
  <footer>
    <div class="footer">
      <b-container class="footer-boot">
        <b-row>
          <b-col name="icon-exits">
            <div class="icons">
              <a href="https://github.com/WokFriedE" target="_blank">
                <img src="../../assets/socials/github.png" class="icon" />
              </a>
              <a href="#" target="_blank">
                <img src="../../assets/socials/linkedin.png" class="icon" />
              </a>
              <a href="#" target="_blank">
                <img src="../../assets/socials/discord.png" class="icon" />
              </a>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col class="contact-me">
            <strong style="justify-content: center; text-align: center;">Contacting Me</strong>
            <div class="content1">
              <ul class="contact-info">
                <li>
                  <a>Email: </a>
                  <a href="">hi@njit.edu</a>
                </li>
                <li>
                  <a>Discord: </a>
                  <a href="">snipe#4444</a>
                </li>
              </ul>
            </div>
          </b-col>
        </b-row>

      </b-container>
      <h6>By: Ethan H.</h6>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
:root {
  --footer-color: ;
  --footer-text-color: rgb(73, 73, 73);
}

footer {
  color: var(--footer-text-color);
  background: linear-gradient(0deg, rgb(199, 199, 199), rgb(196, 196, 196) 95%);
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
  padding: 2%;
  padding-left: 3%;
  padding-right: 3%;
}

.icon:hover,
.icon:focus {
  border-radius: 20px;
  background-color: rgba(153, 153, 153, 0.205);
  animation: raiseIn 200ms ease-in-out;
  animation-fill-mode: forwards;
}

.contact-me {
  border: 1px solid #555555;
  padding-top: 0.5%;
  margin-bottom: 1%;
  justify-content: center;
  text-align: center;
  margin-inline: 1%;
}

.contact-info {
  list-style: none;
  padding: 0%;
  margin: 0%;
  margin-bottom: 1%;
}

a:link,
a:visited {
  color: rgb(73, 73, 73);
  text-decoration: none;
}

a:hover {
  color: #fcfcfc;
}

@keyframes raiseIn {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(0.85);
  }
}
</style>