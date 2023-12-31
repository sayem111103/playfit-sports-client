import Container from "../../../components/Container";
import SectionHeader from "../../../components/sectionHeader";
import InstructorCard from "../../../components/InstructorCard";
import useInstructors from "../../../Hooks/useInstructors";

const Instructors = () => {
    const [instructors, refetch] = useInstructors()
    return (
        <section className="pb-20">
            <Container>
                <SectionHeader name={'Popular Instructors'}></SectionHeader>
                <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
                    {instructors?.slice(0,6).map(id => <InstructorCard key={id._id} data={id}></InstructorCard>)}
                </div>
            </Container>
        </section>
    );
};

export default Instructors;