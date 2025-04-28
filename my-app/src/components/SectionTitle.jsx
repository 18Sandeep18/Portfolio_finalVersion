function SectionTitle({ title, Icon }) {
    return (
      <div className="text-center mb-12">
        {Icon && <Icon className="mx-auto mb-4 h-8 w-8 text-indigo-600" />}
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
    );
  }
  
  export default SectionTitle;
  