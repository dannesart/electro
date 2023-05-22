<template>
    <NuxtLayout>
        <Headline size="1">
            {{ page }}
        </Headline>
        <section class="flex flex-col md:gap-10">
            <Headline size="3">
                Historia
            </Headline>
            <Text>

                Electro Engineering AB startades 1995 av ett kamratgäng bestående av Bo Karlsson, Arne Hilton, Christer
                Gustafsson, Staffan Lannås, Tommy Larsson, Bo Anderson, Hans Johansson, Per-Olof Bogren. De var
                arbetskollegor
                på elkonsultföretaget Folke Johansson. På 90-talet slogs Folke Johansson ihop med andra bolag och bildade
                Scandiaconsult. Kamratgänget ville bryta sig loss från det stora komplexa företaget för att istället kunna
                specialisera sin kompetens och erbjuda kvalificerade konsulttjänster. Efter lång tids sökande hittade de
                till
                slut en lokal i slakthusområdet i Johanneshov där de startade upp Electro Engineering. Det blev långa dagar
                och
                kvällar för att starta upp företaget. Idag har vi vuxit och blivit över 30 stycken anställda samt flyttat
                till
                nya lokaler på Södra Station.
            </Text>
        </section>
        <section class="flex flex-col md:gap-10">
            <Headline size="3">
                Verksamhet
            </Headline>

            <Text>
                Electro Engineering AB är ett oberoende och fristående konsultföretag inom elbranschen. Vi arbetar med alla
                typer av installationsprojekteringar från bostäder till avancerade industrianläggningar. Vi har
                specialistkunskaper inom tung kraftförsörjning, elmiljö, belysning, KNX, brandlarm, säkerhet, datanät,
                allmän
                tele och AV-teknik. Vi har lång erfarenhet inom alla typer av elinstallationer och satsar kontinuerligt på
                kompetensutveckling. Våra erfarna elkonsulter hjälper till att analysera, anpassa och hitta de smartaste och
                mest ekonomiska lösningarna. Vi jobbar tätt tillsammans för att ta del av varandras kompetens samt vidga
                våra
                kunskaper, ensam är ingen stark. Vårt kunnande och engagemang är en garanti för ett lyckat projekt.
            </Text>
            <Text>
                Vi uppdaterar ständigt våra beräknings- och ritprogram utifrån efterfrågan och teknikutveckling.

                Stort fokus ligger på personaltrivsel eftersom det är viktigt att alla som arbetar hos oss mår bra och
                känner
                att de har möjlighet att utvecklas.
            </Text>
        </section>
        <section class="flex flex-col md:gap-10">
            <Headline size="3">
                Kvalité och miljö
            </Headline>

            <Text>
                På Electro Engineering AB finns ett genomarbetat system för kvalitetssäkring. Kvalitetssystemet bygger på
                grundinställningen att göra rätt från början. Genom att definiera förutsättningarna och dokumentera dessa,
                säkerställes att uppdragsgivaren erhåller en god projekteringskvalitet. Vårt system ansluter till ISO 9001
                och
                vi har flerårig erfarenhet från projekt med certifierade uppdragsgivare där vi arbetar med projektspecifika
                kvalitetsplaner och rutiner enligt denna kvalitetsstandard. Inom vår verksamhet verkar vi utifrån den
                miljöpolicy som antagits av bransch- organisationen, Arkitekt och Ingenjörsföretagen. Den checklista för
                Miljöanpassad projektering som framtagits nyttjas i vårt projekteringsarbete.
                Personalen utbildas kontinuerligt i miljöfrågor.
                Vi strävar kontinuerligt efter att integrera kretsloppstänkande i vår verksamhet och så långt som möjligt –
                ekonomiskt, tekniskt och socialt – välja arbetssätt, metoder, system, och material som medverkar till att
                hushålla med naturens resurser, möjliggöra kretslopp och skapa miljöanpassade lösningar.
                Våra projekt har gett oss erfarenhet av att arbeta med LEED, Green Building, Breeam och Miljöbyggnad.

            </Text>
        </section>
    </NuxtLayout>
</template>
<script setup>

const { page } = useRoute().params;

</script>