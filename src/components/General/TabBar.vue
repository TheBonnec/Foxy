<template>
    <div class="container">
        <img @click="updateSelectedTab(null)" id="logo_img" src="../../assets/logo.png" alt="Logo FOXY"/>

        <ul>
            <li v-for="tabBarElement in tabBarLinks" 
                :key="tabBarElement"
                :class="getTabColor(tabBarElement)"
                @click="updateSelectedTab(tabBarElement)">
                {{ tabBarElement }}
            </li>
        </ul>
    </div>
</template>




<script>
export default {
    props: {
        selectedTab: {
            type: String,
            required: true
        }
    },

    data() {
        return {
            tabBarLinks: ['COMMANDER', 'NOTRE ÉQUIPE', 'NOS RÉALISATIONS', 'TARIFS', 'BLOG', 'CONTACT', 'ÊTRE RAPPELÉ'],
        };
    },

    methods: {
        getTabColor(tabName) {
            if (tabName === this.selectedTab) {
                return "orange-text";
            } else {
                return "";
            }
        },

        updateSelectedTab(tabName) {
            this.$emit('update-selected-tab', tabName);
        }
    }
}
</script>




<style scoped>
.container {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 4.5rem;
}

#logo_img {
    order: 1;
    width: 40px;
}

ul {
    order: 2;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
    margin-left: auto;
    padding: 0;
    gap: 0.8rem;
}

li {
    font-weight: bold;
}

.orange-text {
    color: #F7931A;
}

</style>