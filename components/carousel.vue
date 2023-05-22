<template>
    <div class="flex flex-col md:flex-row gap-10">
        <div class="flex-1 flex flex-col relative justify-center ">

            <div class="flex flex-col gap-14 mb-14 md:mb-0">
                <Headline size="1" :class="{ 'animated': animated }">
                    {{ slides[activeSlide].title }}
                </Headline>
                <Text :class="['text-gray-500']">
                    {{ slides[activeSlide].body }}
                </Text>
            </div>

            <div class="md:absolute bottom-0 flex gap-6 left-1/2" v-if="slides.length > 1">
                <div v-for="(slide, index) in  slides " class="h-8 w-16 rounded-full bg-pink-100 cursor-pointer" :class="{
                    'bg-pink-400':
                        activeSlide === index
                }" @click="handleClickChangeSlide(index)"></div>
            </div>

        </div>
        <div class="flex-none md:flex-1 flex justify-end relative h-96 h-[34rem]">
            <div v-for="(slide, index) in slides"
                class="absolute right-0 w-96 w-[34rem] h-96 h-[34rem] overflow-hidden rounded-2xl"
                :class="[...slideClasses[index]]">
                <img v-if="slide?.image" :src="slide?.image" class="object-cover h-full" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

type Slide = {
    title: string;
    body: string;
    image?: string;
}

const activeSlide = ref(0);
const animated = ref(true);
const isSliding = ref(false);
const slides: Slide[] = [{
    title: 'Välkommen till Electro Engineering',
    body: 'Ett företag man kommer ihåg'
}];

const slideClasses = [
    [`bg-pink-50`, `z-40`, `-translate-x-0`],
    [`bg-pink-100`, `z-30`, `-translate-x-20`, `scale-90`],
    [`bg-pink-200`, `z-20`, `-translate-x-40`, `scale-75`],
]

const clearAnimationState = () => {
    setTimeout(() => {
        animated.value = false;
    }, 700)
}
clearAnimationState()

const handleClickChangeSlide = (index: number) => {
    detachSlideInterval();
    changeSlide(index);
    attachSlideInterval();
}

const changeSlide = (index: number) => {
    activeSlide.value = index;
    animated.value = true;
    // slideClasses[0].
    //  isSliding.value = true;
    clearAnimationState()
}

let automaticSlideInterval: any;
const attachSlideInterval = () => {
    automaticSlideInterval = setInterval(() => {

        const changeTo = activeSlide.value === slides.length - 1 ? 0 : activeSlide.value + 1;
        changeSlide(changeTo);
    }, 10000)
}
const detachSlideInterval = () => {
    clearInterval(automaticSlideInterval);
}
if (slides.length > 1) attachSlideInterval();

</script>


<style scoped>
.slide-off {
    animation: slideOff 0.6s ease-in-out forwards;
}

.animated {
    transform: translateY(-50px);
    opacity: 0;
    animation: show 0.6s ease-in-out forwards;
}

@keyframes show {
    to {
        transform: translate(0, 0);
        opacity: 1;
    }
}

@keyframes slideOff {
    to {
        transform: translateX(100px);
        opacity: 0;
    }
}
</style>