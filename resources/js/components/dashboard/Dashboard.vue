<template>
    <div class="dashboard-container">
        <h1 class="dashboard-title">Dashboard</h1>

        <div class="stats-container">
            <div class="stat-card">
                <h3>Total Users</h3>
                <p class="stat-value">128</p>
                <p class="stat-change">+12% from last month</p>
            </div>

            <div class="stat-card">
                <h3>Total Products</h3>
                <p class="stat-value">534</p>
                <p class="stat-change">+8% from last month</p>
            </div>

            <div class="stat-card">
                <h3>Revenue</h3>
                <p class="stat-value">$12,345</p>
                <p class="stat-change">+15% from last month</p>
            </div>

            <div class="stat-card">
                <h3>Pending Orders</h3>
                <p class="stat-value">23</p>
                <p class="stat-change">-5% from last month</p>
            </div>
        </div>

        <div class="chart-container">
            <h2>Performance Overview</h2>
            <div class="chart-placeholder">
                <p>Chart will be displayed here</p>
                <p>You can integrate a chart library like Chart.js or ApexCharts</p>
            </div>
        </div>

        <div class="recent-activity">
            <h2>Recent Activity</h2>
            <ul class="activity-list">
                <li v-for="(activity, index) in recentActivities" :key="index" class="activity-item">
                    <span class="activity-time">{{ activity.time }}</span>
                    <span class="activity-description">{{ activity.description }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Sample data for the dashboard
const recentActivities = ref([
    { time: '10 min ago', description: 'New user registered' },
    { time: '1 hour ago', description: 'User #123 updated their profile' },
    { time: '2 hours ago', description: 'New order #1234 was placed' },
    { time: '3 hours ago', description: 'Product ABC was updated' },
    { time: '5 hours ago', description: 'Payment received for order #1230' }
]);
</script>

<style scoped>
.dashboard-container {
    padding: 20px;
    background-color: white;
    color: #212121;
}

.dashboard-title {
    margin-bottom: 24px;
    font-size: 26px;
    font-weight: 700;
    color: #1a1a1a;
}

.stats-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
}

.stat-card {
    background: white;
    padding: 20px;
    border-radius: 6px;
    border: 1px solid #1F2937;
    box-shadow: 0px 5px 0px #1F2937;
    position: relative;
}

.stat-card h3 {
    color: #444;
    font-weight: 600;
}

.stat-value {
    font-size: 30px;
    font-weight: bold;
    margin: 10px 0 5px;
    color: #1a1a1a;
}

.stat-change {
    color: #2E7D32;
    font-size: 14px;
    font-weight: 500;
}

.chart-container {
    background: white;
    padding: 20px;
    border-radius: 6px;
    border: 1px solid #1F2937;
    box-shadow: 0px 5px 0px #1F2937;
    margin-bottom: 30px;
    position: relative;
}

.chart-container h2 {
    color: #1a1a1a;
    font-weight: 600;
    margin-bottom: 16px;
}

.chart-placeholder {
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px dashed #1F2937;
    border-radius: 4px;
    background: #f0f0f0;
    color: #555;
}

.recent-activity {
    background: white;
    padding: 20px;
    border-radius: 6px;
    border: 1px solid #1F2937;
    box-shadow: 0px 5px 0px #1F2937;
    position: relative;
}

.recent-activity h2 {
    color: #1a1a1a;
    font-weight: 600;
    margin-bottom: 16px;
}

.activity-list {
    list-style: none;
    padding: 0;
}

.activity-item {
    padding: 12px 0;
    border-bottom: 1px solid #1F2937;
    display: flex;
}

.activity-time {
    color: #555;
    min-width: 100px;
    font-weight: 500;
}

.activity-description {
    flex: 1;
    color: #212121;
}
</style>
