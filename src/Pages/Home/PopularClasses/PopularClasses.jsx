import useClasses from "../../../Hooks/useClasses";
import ClassCard from "../../../components/ClassCard";
import Container from "../../../components/Container";
import SectionHeader from "../../../components/sectionHeader";

const PopularClasses = () => {
    const [classes,] = useClasses();
    const popular = classes.filter(cd => cd.availableSeats <= 3);
    return (
        <section className="py-20">
            <Container>
                <SectionHeader name={'Popular classes'}></SectionHeader>
                <div className="grid grid-cols-3 pt-6">
                    {popular?.map(pd => <ClassCard key={pd._id} data={pd}></ClassCard>)}
                </div>
            </Container>
        </section>
    );
};

export default PopularClasses;