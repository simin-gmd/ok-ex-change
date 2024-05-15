<template>
    <section class=" w-full py-3 px-5 flex justify-center items-center  flex-col">

        <v-hover v-slot="{ isHovering, props }" open-delay="100" close-delay="100">
            <v-card :class="{ 'on-hover': isHovering }" :elevation="isHovering ? 4 : 2" class="mx-auto  rounded-lg" height="100%"
                width="100%" v-bind="props">
                <div class="">
                    <slot />

                </div>
            </v-card>
        </v-hover>

    </section>
</template>
 
<script setup>


</script>
