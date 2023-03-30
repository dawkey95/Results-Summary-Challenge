import React from 'react';
import jsonData from '../data/data.json';

const Card = () => {
	const data = jsonData;
	const items = data;

	return (
		<>
			<div class="card-background">
				<header class="card-header">
					<p class="your-result">Your Result</p>
					<div class="circle-container">
						<div class="circle">
							<div class="score-container">
								<p class="your-score">76</p>
								<p class="score-out-of">of 100</p>
							</div>
						</div>
					</div>
					<div class="header-info">
						<h1 class="info-title">Great</h1>
						<p class="info-para">
							Your performance exceed 65% of the people conducting the test here!
						</p>
					</div>
				</header>

				<section class="card-body">
					<h2 class="summary">Summary</h2>
					<div class="categories">
						{items.map((item) => {
							return (
								<div class={`category ${item.category}`} key={item.id}>
									<div class="category-name">
										<img src={item.icon} alt={item.category} />
										<p class="category-title">{item.category}</p>
									</div>
									<div class="category-score">
										<p class="your-category-score">{item.score}</p>
										<p class="category-out-100">/ 100</p>
									</div>
								</div>
							);
						})}

						<button class="btn" onClick={''}>
							Continue
						</button>
					</div>
				</section>
			</div>
		</>
	);
};

export default Card;
