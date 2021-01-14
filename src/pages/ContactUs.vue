<page-query>
query {
  	posts: allStrapiContactPage{
    	edges{
      		node{
				title,
				paragraph,
				form {
					name,
					field {
						id,
						name,
						label,
						type
					},
					checkbox {
						name,
						label
					},
					actionText
				}
			}
		}
	}
}
</page-query>

<script>
export default {
  name: "ContactUsPage",
  
  metaInfo: {
    title: 'Contact us'
  },

  computed: {
    data() {
      return this.$page.posts.edges[0].node;
	},
	
	form() { return this.data.form; }
  }
}
</script>

<template>
<DefaultLayout>
	<div class="c-contact-us">
		<div class="c-contact-us__message">
			<p class="c-contact-us__title">{{data.title}}</p>
			
			<p class="c-contact-us__paragraph">{{data.paragraph}}</p>
		</div>

		<form class="c-contact-us__form">
			<div class="c-contact-us__fields">
				<div
					v-for="field of form.field"
					:key="'field-' + field.id"
					class="c-contact-us__field"
					:class="'c-contact-us__field--' + field.type"
				>
					<label :for="field.name">{{field.label}}</label>
				
					<input
						:type="field.type"
						:id="field.name"
						:name="field.name"
					>
				</div>
				<div
					v-for="checkbox of form.checkbox"
					:key="'field-' + checkbox.id"
					class="c-contact-us__checkboxes"
				>
					<input type="checkbox" :id="checkbox.name" :name="checkbox.name" />
				
					<label :for="checkbox.name">{{checkbox.label}}</label>
				</div>

				<button class="c-button c-contact-us__submit" type="submit">
					{{form.actionText}}
				</button>
			</div>
		</form>
	</div>
</DefaultLayout>
</template>

<style>
.c-contact-us {
	height: 100vh;
	padding-top: var( --navbar-height );
	background: var( --background-primary );
	color: #fff;
}

.c-contact-us__message {
	width: 100%;
	margin: 4rem 0;
	padding: 2rem 20%;
	/* background-color: rgba(0,0,0,0.85);
	background-blend-mode: darken;
	background-image: url( "../assets/images/landing-background.jpg" );
	background-size: cover; */
}

.c-contact-us__title {
	font-size: 2rem;
	text-align: center; 
}	

.c-contact-us__paragraph {
	padding: 0 20%;
	text-align: center; 
}

.c-contact-us__form {
	display: flex;
	flex-direction: column;
	padding: 2rem;
	align-items: center;
}

.c-contact-us__fields {
	width: 30rem;
}

.c-contact-us__field {
	display: flex;
	width: 100%;
	justify-content: space-between;
	margin-bottom: 1.5rem;
}

.c-contact-us__field input {
	width: 20rem;
	outline: 0;
	border: none;
	border-radius: 3px;
	padding: 0.25rem;
	font-size: 1rem;
}

.c-contact-us__checkboxes input {
	margin-right: 1rem;
}

.c-contact-us__submit {
	display: block;
	min-width: 10rem;
	margin: auto;
	margin-top: 4rem;
}
</style>
