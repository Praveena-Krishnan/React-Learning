import './ProfileCard.css';

function ProfileCard({ name, age, image }) {
  return (
    
    <div className="profile-card">
      <img src={image} alt={`${name}'s profile`} />
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
    
  );
}

export default ProfileCard;