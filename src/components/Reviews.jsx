const reviews = [
  {
    name: 'Sarah Jenkins',
    service: 'Invisalign Patient',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzrwkhDewueD0rT-FC1VdN_ei59aPmeuKc069MuNu8A05_GyIrgO1Akdswpfno4dAqIYf5W77dfLBohJE9FA75KXK7GD2iR8pD7ZdWg28sH3vqug8rFqjjS7L_P4vumhv3VOclbNztLIbwlfHU5yU_Yt5fbMiKXqcCANwch1fqb62TnIJr8PkeeqMJ9pbNoZ9XfvXyZWNb3TUy7XQAbeSu-8MnbP8Tyf1FmwSVH1XpL5Ou-JMM-jdOTF24d5bax_i4Y0l8MpBQPtw',
    rating: 5,
    date: '2 days ago',
    text: '"I was terrified of the dentist for years, but the team at Hume Dental completely changed my perspective. They were so gentle and patient with my anxiety. My smile has never looked better!"',
  },
  {
    name: 'Michael Ross',
    service: 'Routine Checkup',
    avatar: null,
    avatarLetter: 'M',
    avatarColor: 'bg-blue-100 text-blue-600',
    rating: 5,
    date: '1 week ago',
    text: '"Efficiency at its finest. I was in and out for my cleaning in 45 minutes, but never felt rushed. The front desk staff is incredibly organized and friendly."',
  },
  {
    name: 'Emily Chen',
    service: 'Cosmetic Dentistry',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPqDkERSfQKnEMRiYJDjI6PfmAmRUimK58Q46EFoqIE71gX9zTd8Z66CixgjOOSyUmyhcSbpEgrGF4Fi_XXC-PWHrdPlRDQGxSyo_kYZEr7zFPz8I7Am6wnQdjLlBkyo-f_xdBy_oM8yx2Il60NabIUtOcp8tWG-l0qV8CM8ttAySkcmT-abCCbx4wY1gdrCiy3iw7IbIiKrI4xVlJAYIuuCqLzk7Zyeob8Z-3VI8MoGGLmlrWeB8IbdwMv3bqGtQ0sjHujALiNwk',
    rating: 4.5,
    date: '2 weeks ago',
    text: '"I got veneers done here and the results are stunning. Dr. Hume has an artist\'s eye. The only reason for 4.5 stars is that scheduling was a bit tight, but well worth the wait."',
  },
  {
    name: 'David Kim',
    service: 'Emergency Care',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACXz6wfWFQ7X-dP_DTigOLp7aKFgZKirOL5RCUCBDyqGOBdvOzdz4ycFBEB3AnjCMdPNfKsV8x6RnhtdzxuKhyzdIaC5i4tqWkbcArtkORgPHpf5xQOyVu9Yw4U_BbtInDEylQHC-p_ka4uGZiUhkiqxjo91K2CsDDwONkh-f5V8zmGLslLtiQvoZM0ypf9kQOfzMp4VWfJVXzvnu6ZeY5eliDZfNYAdESFxNsx9v6J7NNR-Cy23Es8L5O3QrVALKeJcfDtrAn-3c',
    rating: 5,
    date: '3 weeks ago',
    text: '"Had a toothache that kept me up all night. They squeezed me in first thing in the morning and resolved the issue immediately. Truly grateful for their prompt care."',
  },
  {
    name: 'Amanda B.',
    service: 'Family Dentistry',
    avatar: null,
    avatarLetter: 'A',
    avatarColor: 'bg-orange-100 text-orange-600',
    rating: 5,
    date: '1 month ago',
    text: '"We bring our whole family here, including my two kids (ages 5 and 8). The pediatric care is wonderful. They make it fun for the kids so there are never any tears."',
  },
  {
    name: 'Jessica T.',
    service: 'Cleaning',
    avatar: null,
    avatarLetter: 'J',
    avatarColor: 'bg-purple-100 text-purple-600',
    rating: 5,
    date: '3 months ago',
    text: '"Simply the best dental experience in SF. The office is beautiful and clean."',
  },
]

function StarRating({ rating }) {
  const stars = []
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={i} className="material-symbols-outlined fill-1 text-[18px] text-yellow-400">star</span>
    )
  }
  if (hasHalfStar) {
    stars.push(
      <span key="half" className="material-symbols-outlined fill-1 text-[18px] text-yellow-400">star_half</span>
    )
  }

  return <div className="flex text-yellow-400 mb-3 text-sm">{stars}</div>
}

function Reviews() {
  return (
    <section id="reviews" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="flex flex-col text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">Patient Stories</h2>
            <p className="text-gray-600 text-lg">See why our patients love their smiles.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6 bg-gray-50 px-8 py-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-1 text-yellow-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined fill-1">star</span>
                ))}
              </div>
              <p className="text-sm text-gray-500 font-medium">Based on 500+ reviews</p>
            </div>
          </div>
        </div>

        <div className="masonry-grid">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl mb-6 border border-gray-100 break-inside-avoid">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {review.avatar ? (
                    <img alt={review.name} className="w-12 h-12 rounded-full object-cover" src={review.avatar} />
                  ) : (
                    <div className={`w-12 h-12 rounded-full ${review.avatarColor} flex items-center justify-center font-bold text-lg`}>
                      {review.avatarLetter}
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold text-gray-900">{review.name}</h3>
                    <p className="text-xs text-gray-400">{review.service}</p>
                  </div>
                </div>
                <span className="text-gray-300 text-xs">{review.date}</span>
              </div>
              <StarRating rating={review.rating} />
              <p className="text-gray-600 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
