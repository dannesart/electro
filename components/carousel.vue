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
            <div v-for="(slide, index) in slides" class="slide-img">
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
}, {
    title: 'Se dig om kring',
    body: 'Ett företag man kommer ihåg'
}];
const maxZ = slides.length * 10;


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

    const slideImgElements = document.querySelectorAll('.slide-img');
    const toElement = slideImgElements[index];
    setSlidePosition(toElement, 0);
    changeTheRest(slideImgElements, index);
    activeSlide.value = index;
    animated.value = true;

    clearAnimationState()
}

const changeTheRest = (slides: any, exceptIdx: number) => {
    const rest = [...slides]
    rest.splice(exceptIdx, 1);
    rest.map((element, idx) => {
        setSlidePosition(element, idx + 1)

    })
}

let automaticSlideInterval: NodeJS.Timer;
const attachSlideInterval = () => {
    automaticSlideInterval = setInterval(() => {

        const changeTo = activeSlide.value === slides.length - 1 ? 0 : activeSlide.value + 1;
        changeSlide(changeTo);
    }, 10000)
}
const detachSlideInterval = () => {
    clearInterval(automaticSlideInterval);
}


const setSlidePosition = (element: Element | any, idx: number) => {
    element?.style?.setProperty?.('--index', idx);
}

const initSlides = () => {
    const slideImgElements = document.querySelectorAll('.slide-img');
    [...slideImgElements].map((element, idx) => {
        setSlidePosition(element, idx)
    })
    if (slides.length > 1) attachSlideInterval();
}
onMounted(() => {
    initSlides();
})


</script>


<style scoped lang="scss">
.slide-img {

    --slideSizeDiff: 6rem;
    --dist: calc(var(--slideSizeDiff) * 1.5);

    --index: 0;
    --size: calc(34rem - var(--index) * var(--slideSizeDiff));
    --rightDist: calc(var(--index) * var(--dist));
    --topDist: calc(var(--index) * var(--slideSizeDiff) / 2);
    --z: calc(var(--index) * -10);
    --bgBrightness: calc(100% - (10 * var(--index)));
    --opacity: calc(1 - (var(--index) * 0.1));
    --delay: calc(0ms * var(--index));
    width: var(--size);
    aspect-ratio: 1;
    background-color: rgb(244 114 182 / 1);
    filter: brightness(var(--opacity));
    z-index: var(--z);
    right: var(--rightDist);
    top: var(--topDist);
    transform-origin: center;
    transition: all 1s ease-in-out;
    transition-delay: var(--delay);
    @apply absolute overflow-hidden rounded-2xl;

    @media(width < 768) {
        @apply h-96;
    }

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
</style>