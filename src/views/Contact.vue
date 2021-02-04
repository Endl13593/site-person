<template>
  <div class="contact">
    <section class="banner_area">

    </section>
    <!--================End Home Banner Area =================-->

    <!--================Contact Area =================-->
    <section class="contact_area p_120">
      <div class="container">
        <div class="welcome_text">
          <h4>Contato</h4>
        </div>
        <div class="row">
          <div class="col-lg-3">
            <div class="contact_info">
              <div class="info_item">
                <i class="fa fa-phone"></i>
                <h6>(92) 99537-5239</h6>
                <p>Entre em contato a qualquer momento</p>
              </div>
              <div class="info_item">
                <i class="fa fa-envelope"></i>
                <h6>nunes.eduardo1993@gmail.com</h6>
                <p>Envie sua mensagem a qualquer momento</p>
              </div>
            </div>
          </div>
          <div class="col-lg-9">
            <form class="row" data-netlify="true" name="formContact" method="post" @submit="handleSubmit">
              <input type="hidden" name="form-name" value="formContact" />
              <div class="col-md-12">
                <div class="form-group">
                  <input type="text" class="form-control" name="name" placeholder="Nome" autocomplete="off">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" name="email" placeholder="E-mail" autocomplete="off">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" name="subject" placeholder="Assunto" autocomplete="off">
                </div>
                <div class="form-group">
                  <textarea class="form-control" name="message" rows="5" placeholder="Mensagem" autocomplete="off"></textarea>
                </div>
              </div>
              <div class="col-md-12 text-right">
                <button type="submit" class="btn submit_btn">Enviar mensagem</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  methods: {
    encode(data) {
      return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&")
    },
    handleSubmit(event) {
      event.preventDefault()
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        // eslint-disable-next-line no-undef
        body: this.encode({
          "form-name": event.target.getAttribute("name"),
          ...name
        })
        // eslint-disable-next-line no-undef
      }).then(() => navigate("/thank-you/")).catch(error => alert(error))
    }
  }
}
</script>