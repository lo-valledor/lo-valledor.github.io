<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import styles from './Timer.module.css';

    let now = Date.now();
    let end = Date.UTC(2025, 7, 31, 14, 59, 59); // August 31, 2025, 14:59:59 UTC
    let intervalId: ReturnType<typeof setInterval>;
    
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let isFinished = false;

    function updateTime() {
        now = Date.now();
        const diff = end - now;

        if (diff <= 0) {
            days = hours = minutes = seconds = 0;
            isFinished = true;
            if (intervalId) {
                clearInterval(intervalId);
            }
            return;
        }

        const totalSeconds = Math.floor(diff / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const totalHours = Math.floor(totalMinutes / 60);
        const totalDays = Math.floor(totalHours / 24);

        days = totalDays;
        hours = totalHours % 24;
        minutes = totalMinutes % 60;
        seconds = totalSeconds % 60;
    }

    function formatTime(value: number): string {
        return value.toString().padStart(2, '0');
    }

    onMount(() => {
        updateTime();
        intervalId = setInterval(updateTime, 1000);
    });

    onDestroy(() => {
        if (intervalId) {
            clearInterval(intervalId);
        }
    });
</script>

<div class={styles.timer}>
    {#if isFinished}
        <div class={styles.finished}>¡Tiempo terminado!</div>
    {:else}
        <div class={styles.timeCards}>
            <div class={styles.timeCard}>
                <div class={styles.timeValue}>{formatTime(days)}</div>
                <div class={styles.timeLabel}>días</div>
            </div>
            
            <div class={styles.timeCard}>
                <div class={styles.timeValue}>{formatTime(hours)}</div>
                <div class={styles.timeLabel}>horas</div>
            </div>
            
            <div class={styles.timeCard}>
                <div class={styles.timeValue}>{formatTime(minutes)}</div>
                <div class={styles.timeLabel}>min</div>
            </div>
            
            <div class={styles.timeCard}>
                <div class={styles.timeValue}>{formatTime(seconds)}</div>
                <div class={styles.timeLabel}>seg</div>
            </div>
        </div>
    {/if}
</div>
