<template>
    <div>
      <v-card>
        <v-card-text>
          <v-form ref="form" v-model="contactFormValidation.valid" lazy-validation>
            <v-text-field
                    v-model="contactForm.name"
                    :rules="contactFormValidation.nameRules"
                    label="名前"
                    required
            ></v-text-field>
            <v-text-field
                    v-model="contactForm.email"
                    :rules="contactFormValidation.emailRules"
                    label="メールアドレス"
                    required
            ></v-text-field>
            <v-select
                    v-model="contactForm.select"
                    label="お問い合わせ項目"
                    :items="select"
                    :rules="contactFormValidation.selectRules"
                    required
            ></v-select>
            <v-textarea
                    v-model="contactForm.contents"
                    :rules="contactFormValidation.contentsRules"
                    label="内容"
                    required
            ></v-textarea>

            <v-btn
                    :loading="contactForm.loading"
                    :disabled="!contactFormValidation.valid"
                    @click="sendMail()"
                    class="button button-square"
            >送信
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>

        <!-- <v-card>
            <v-container>
                <v-form ref="form" v-model="contactFormValidation.valid" lazy-validation>

                    <v-text-field
                            v-model="contactForm.name"
                            :rules="contactFormValidation.nameRules"
                            label="名前"
                            required
                    ></v-text-field>
                    <v-text-field
                            v-model="contactForm.email"
                            :rules="contactFormValidation.emailRules"
                            label="メールアドレス"
                            required
                    ></v-text-field>
                    <v-textarea
                            v-model="contactForm.contents"
                            :rules="contactFormValidation.contentsRules"
                            label="内容"
                            background-color="#fff"
                            required
                    ></v-textarea>
                    <v-btn
                            :loading="contactForm.loading"
                            :disabled="!contactFormValidation.valid"
                            @click="sendMail()"
                            class="button button-square"
                    >送信
                    </v-btn>
                </v-form>
            </v-container>
        </v-card> -->
        <v-snackbar
                v-model="snackBar.show"
                :color="snackBar.color"
                bottom
                right
                :timeout="6000"
                class="font-weight-bold"
        >
            {{snackBar.message}}
        </v-snackbar>
    </div>
</template>

<script>
  import { functions } from '@/plugins/firebase'

  export default {
    data: () => ({
      select: ['オーダー水槽', 'デザイナーズ水槽', 'お見積もり', 'その他'],
      contactForm: {
        name: '',
        contents: '',
        select: '',
        email: '',
        loading: false
      },
      contactFormValidation: {
        valid: false,
        nameRules: [v => !!v || '名前は必須項目です'],
        emailRules: [v => !!v || 'メールアドレスは必須項目です'],
        selectRules: [v => !!v || 'お問い合わせ項目は必須項目です'],
        contentsRules: [v => !!v || '内容は必須項目です']
      },
      snackBar: {
        show: false,
        color: '',
        message: ''
      }
    }),
    methods: {
      sendMail: function () {
        if (this.$refs.form.validate()) {
          this.contactForm.loading = true
          const mailer = functions.httpsCallable('sendMail')

          mailer(this.contactForm)
            .then(() => {
              this.formReset()
              this.showSnackBar(
                'success',
                'お問い合わせありがとうございます。送信完了しました'
              )
            })
            .catch(err => {
              this.showSnackBar(
                'error',
                '送信に失敗しました。時間をおいて再度お試しください'
              )
              console.log(err)
            })
            .finally(() => {
              this.contactForm.loading = false
            })
        }
      },
      showSnackBar: function (color, message) {
        this.snackBar.message = message
        this.snackBar.color = color
        this.snackBar.show = true
      },
      formReset: function () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style scoped>
.v-text-field__slot{
  display: none;
}
.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  background-color: #0d6fc4;
}
.button {
  cursor: pointer;
}
  .button.button-square {
    padding: 9px 0;
    width: 231px;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 1;
    border-radius: 8px;
    box-shadow: 0 2px 4px 3px rgba(0, 0, 0, 0.50);
    text-align: center;
    color: #fff;

  }
.v-textarea input {
  display: none;
}
</style>
