<template>
    <div>
        <div class="main">
            <div class="row">
                <div class="col-sm-2">
                    <h5>World of Sanrio</h5>
                    <p>Store Locator</p>
                    <p>Character Goodies</p>
                    <p>About Sanrio</p>
                </div>
                <div class="col-sm-2">
                    <h5>More</h5>
                    <p>e-Gift Cards</p>
                    <p>Deals and Promos</p>
                </div>
                <div class="col-sm-3">
                    <h5>Need Assistance?</h5>
                    <p>Returns Center</p>
                    <p>FAQs</p>
                    <p>Contact Us</p>
                    <p>Business Opportunities</p>
                    <p>CPSIA</p>
                </div>
                <div class="col-sm-2">
                    <h5>Resources</h5>
                    <p>Privacy Policy</p>
                    <p>Children's Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
                <div class="col-sm-3">
                    <h5>Keep up with us </h5>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-twitter-x"></i>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-youtube"></i>
                    <i class="bi bi-tiktok"></i>
                    <p class="mt-4">© <span>{{ year() }}</span> SANRIO All Rights Reserved.</p>

                </div>
                
            </div>
        </div>
        <div class="characters">
            <img src="../assets/images/upscalemedia-transformed.jpeg" alt="">
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        year() {
            let date = new Date();
            return date.getFullYear();
        }
    }
}
</script>
<style src="@/assets/css/styles.css"></style>