import Container from "../../../components/Container";
import SectionHeader from "../../../components/sectionHeader";
import InstructorCard from "../../../components/InstructorCard";
import useInstructor from "../../../Hooks/useInstructor";

const Instructors = () => {
    const [instructors, refetch] = useInstructor()
    return (
        <section className="pb-20">
            <Container>
                <SectionHeader name={'Popular Instructors'}></SectionHeader>
                <div className="grid grid-cols-3 gap-6 pt-6">
                    {instructors?.slice(0,6).map(id => <InstructorCard key={id._id} data={id}></InstructorCard>)}
                </div>
            </Container>
        </section>
    );
};

export default Instructors;