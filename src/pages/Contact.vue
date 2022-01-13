<template>
  <Layout>
    <div class="container">

      <div class="contact-header">
        <h1 class="contact-title">Hallo Coworking Köniz!</h1>

        <p>Wir sind momentan geschlossen. Bis wir wieder die Türe in Köniz aufmachen, arbeiten wir von zu Hause, oder im <a href="https://effinger.ch" target="_blank">Effinger in Bern</a>.</p>

        <p>Hinterlasse uns bitte hier deine Fragen.
          Wir werden uns so schnell wie möglich bei dir melden: </p>
      </div>

      <form class="contact-form" method="POST" name="contact" action="https://formspree.io/xnqgkedd">

        <div class="sender-info">
          <div>
            <label for="name" class="label">Name: *</label>
            <input type="text" name="name" required />
          </div>
          <div>
            <label for="name" class="label">Vorname: *</label>
            <input type="text" name="name" required />
          </div>
          <div>
            <label for="name" class="label">Org / Firma / Zusatz:</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label for="name" class="label">Strasse / No.:</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label for="name" class="label">PLZ / Ort:</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label for="name" class="label">Telefon: *</label>
            <input type="text" name="phone" required />
          </div>
          <div>
            <label for="_replyto" class="label">E-Mail: *</label>
            <input type="email" name="_replyto" required />
          </div>
          <div class="checkthis">
            <input type="radio" name="subscribe" />
            <label for="subscribe" class="label">
              Ich interessiere mich für ein Abonnement. Bitte nehmt mit mir Kontakt auf.
            </label>
          </div><div class="checkthis">
            <input type="radio" name="subscribe" />
            <label for="subscribe" class="label">
              Ich löse eine 10erkarte. Bitte schickt mir die Rechnung und legt meine Karte im Space bereit.
            </label>
          </div><div class="checkthis">
            <input type="radio" name="subscribe" />
            <label for="subscribe" class="label">
              Ich werde Mitglied im Verein Coworking Köniz und unterstütze so das Projekt.
            </label>
          </div><div class="checkthis">
            <input type="radio" name="subscribe" />
            <label for="subscribe" class="label">
              Ich melde mich für einen Schnuppertag an. Diese Daten würden mir passen (in der Nachricht notieren).
            </label>
          </div><div class="checkthis">
            <input type="radio" name="subscribe" checked />
            <label for="subscribe" class="label">
              Ich habe ein anderes Anliegen, siehe unten.
            </label>
          </div>
        </div>

        <div class="message">
          <label for="message" class="label">Bemerkungen:</label>
          <textarea name="message"></textarea>
        </div>

        <button class="button">Abschicken</button>

      </form>

    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      bodyAttrs: {
        style: `background-color: #ffd`
      }
    }
  }
}
</script>

<style scoped>
.contact-header {
  padding: 2rem 0 4rem 0;
}
.contact-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.checkthis {
  margin-top: 1em !important;
  display: block;
  clear: both;
}
.checkthis input {
  float: left;
  width: 2em;
  margin-bottom: 1em;
}
.checkthis .label {
  width: auto;
  display: inline;
}
.sender-info {
  display: block;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.sender-info > div {
}
.sender-info > div:last-of-type {
  margin: 0;
}
input:focus,textarea:focus {
  border-color: var(--color-contrast-1);
}
input,textarea {
  background: transparent;
  border: 1px solid var(--color-base-1);
  outline: none;
  border-radius: 0.3rem;
  padding: 0.8rem 1rem;
  color: inherit;
  font-size: 1rem;
  width: 100%;
}
textarea {
  resize: none;
  height: 140px;
}
.button {
  color: var(--color-base);
  background: var(--color-contrast);
  outline: none;
  border: 0;
  font-size: 0.8rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.3rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: opacity 0.25s ease;
  font-size: 500;
  letter-spacing: 0.035em;
}
.button:hover {
  opacity: 0.6;
}
.button:focus {
  border: 1px solid var(--color-base-1);
}
</style>
